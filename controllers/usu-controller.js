import notas from "../models/usuario.js";

export const NotaPost = async (req, res) => {
    try {
        const { nombre, nota, estado } = req.body;
        const newNota = new notas({ nombre, nota, estado });
        await newNota.save();

        res.json({
            msg: 'Nota guardada',
            newNota
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al guardar la nota'
        });
    }
};

export const ValidarName = async(req, res, next) => {
    try{
        const nombre = req.params.nombre; 
        const notasU = await notas.find({ nombre, estadoT: true });
        if (notasU.length === 0) {
            return res.status(404).json({
                msg: 'No se encontraron notas para el nombre proporcionado.'
            });
        }

        res.json({
            msg: 'Consulta exitosa',
            notas: notasU
        });
 
    }catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Error del servidor',
        })
    }
};

export const DeleteNota = async (req, res) => {
    try{
         const {nota} = req.params;
         const deleteNota = await notas.findOneAndUpdate({nota}, {estadoT: false});
         
         if(deleteNota!==null){
            res.json({
                msg: 'Nota borrada',
                deleteNota
            })
         }else{
            res.status(404).json({
                msg: 'No se encontro la nota'
            })
         }
           
        
    }catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al borrar la nota',
            error
        })
    }
}

export const UpdateNota = async (req, res) => {
    try {
       const { nota, Nnota, estado } = req.query;
       
       const updateNota = await notas.findOneAndUpdate(
          { nota: nota, estadoT: true }, 
          { nota: Nnota, estado: estado, estadoT: true } 
        );       
       if(updateNota!==null){
           res.json({
               msg: 'Nota actualizada'
           }) 
       }else{
           res.status(404).json({
               msg: 'No se encontro la nota'
           })
       }


    }catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al actualizar la nota',
            error
        })       
    }
}