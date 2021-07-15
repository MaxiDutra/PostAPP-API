import {Schema,model} from 'mongoose';


export interface  IUser{
    userName: string,
    email:string,
    password:string,
    state: boolean,
    google: boolean,
    rating: number,

}

const userSchema = new Schema(
{
    userName: {
        type: String,
        required: [true, 'El nombre no puede ser invalido']
    },
    email: {
        type: String,
        required: [true, 'El correo no puede ser invalido'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña no debe ser invalida']
    },
    state: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 0
    },
}, 
{timestamps:true}
);

export default model<IUser>('User',userSchema);