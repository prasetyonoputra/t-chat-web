// const BASE_URL = "http://103.139.193.161:8080";
const BASE_URL = "http://localhost:8080";

async function checkToken() {
    try {
        const apiToken = localStorage.getItem("api-token");

        if (!apiToken) {
            return false;
        }

        const response = await fetch(`${BASE_URL}/api/auth/check-token`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                token: apiToken,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Login gagal!");
        }

        return true;
    } catch (error) {
        return false;
    }
}

async function getUserData() {
    try {
        const apiToken = localStorage.getItem("api-token");

        if (!apiToken) {
            return false;
        }

        const response = await fetch(`${BASE_URL}/api/user/get-user-data`, {
            method: "GET",
            headers: { Authorization: `Bearer ${apiToken}` },
        });

        if (!response.ok) {
            return false;
        }

        const responseData = await response.json();

        return responseData.data;
    } catch (error) {
        return false;
    }
}
