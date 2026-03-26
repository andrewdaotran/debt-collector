import mongoose, { Schema, Document } from 'mongoose'

export interface IUser extends Document {
	user: string
	amountOwed: string
}

const UserSchema = new Schema<IUser>({
	user: { type: String },
	amountOwed: { type: String },
})

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema)
