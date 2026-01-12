import crypto from 'crypto'
// import { cookies } from "next/headers";
// import Redis from "ioredis";
// import { redisClient } from '@/redis/redis'

type User = {
	id: number
	role: string
}

export type Cookies = {
	set: (
		key: string,
		value: string,
		options: {
			secure?: boolean,
			httpOnly?: boolean,
			sameSite?: "strict" | "lax",
			expires?: number
		}
	) => void
	get: (key: string) => { name: string, value: string} | undefined
	delete: (key: string) => void
}

export async function createSession(user: User, cookies: Cookies) {
	const sessionId = crypto.randomBytes(512).toString("hex").normalize()

	// await redisClient.set("session", sessionId)

	setCookie(sessionId, cookies)
}

function setCookie(sessionId: string, cookies: Pick<Cookies, "set">) {
	cookies.set("cookie-name", sessionId, {
		secure: true,
		httpOnly: true,
		sameSite: "lax",
		expires: Date.now() + (60 * 60) * 1000
	})

}