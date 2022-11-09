const ServerUrl = process.env.NEXT_PUBLIC_SERVER_URL

if (!ServerUrl) throw new Error('NEXT_PUBLIC_SERVER_URL is not exist')

export default ServerUrl
