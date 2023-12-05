export const estadoExiste = (...estados) => {
    return(req, res, next) => {       
       if(!estados.includes(req.body.estado)) {
           return res.status(400).json({
               msg: `El estado ${req.body.estado} no es permitido`
           })
       }
       next();
    }
}

