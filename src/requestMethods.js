import axios from 'axios';

const BASE_URL = "https://localhost:8889/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYmQ3MmZlZGRkYWE0NWM2ODkxMjVmMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDI5OTQ3MywiZXhwIjoxNjc0NTU4NjczfQ.K_HU1CLie-unVVHnOueoWlaY1zZF1BWOAGpUSsnmLVM";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`},
});