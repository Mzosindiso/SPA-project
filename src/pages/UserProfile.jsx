import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const UserProfile = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("https://api.github.com/users");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setUsers(data);
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch users");
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) return <StyledMessage>Loading...</StyledMessage>;
    if (error) return <StyledMessage>{error}</StyledMessage>;
    if (!users.length) return <StyledMessage>No users found</StyledMessage>;

    return (
        <PageContainer>
            <InfoContainer>
                <StyledH1>GitHub Users</StyledH1>
                <UserList>
                    {users.map((user) => (
                        <UserCard key={user.id}>
                            <p><strong>Username:</strong> {user.login}</p>
                            <img src={user.avatar_url} alt={user.login} width="100" />
                            <p><strong>ID:</strong> {user.id}</p>
                        </UserCard>
                    ))}
                </UserList>
                <BackButton to="/">Back to Home</BackButton>
            </InfoContainer>
        </PageContainer>
    );
};

const PageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: rgb(181, 219, 255);
`;

const InfoContainer = styled.div`
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    max-width: 800px;
    width: 100%;
    text-align: center;
`;

const StyledH1 = styled.h1`
    color: #333;
    margin-bottom: 1.5rem;
`;

const UserList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const UserCard = styled.div`
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
    margin: 1rem;
    width: 200px;
    text-align: center;
`;

const BackButton = styled(Link)`
    display: inline-block;
    background-color: #3498db;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #2980b9;
    }
`;

const StyledMessage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-size: 1.5rem;
    color: #333;
`;

export default UserProfile;
