import mongoose from 'mongoose'

// Function to connect
export async function main() {
  await mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
}
