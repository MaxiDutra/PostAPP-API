import {Request, response, Response} from 'express';

export const getUsuarios = (req: Request , res: Response) =>{

    res.json({
        msg: 'getUsers - Works! <3'
    });
}

export const getUsuario = (req: Request , res: Response) =>{

    const {id} = req.params;

    res.json({
        msg: 'getUser - Works! <3',
        id
    });
}

export const postUser = (req: Request , res: Response) =>{

    const {body} = req;

    res.json({
        msg: 'postUser - Works! <3',
        body
    });
}

export const putUser = (req: Request , res: Response) =>{

    const {id} = req.params;
    const {body} = req;

    res.json({
        msg: 'putUser - Works! <3',
        body,
        id
    });
}

export const deleteUser = (req: Request , res: Response) =>{

    const {id} = req.params;

    res.json({
        msg: 'DeleteUser - Works! <3',
        id
    });
}