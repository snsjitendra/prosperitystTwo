class FormController{
    static index = (req, res) =>{
        try {
            res.render('index')
        } catch (error) {
            
        }
    }
    static indexWithoutBootStrap = (req, res) =>{
        try {
            res.render('indexWithoutBootStrap')
        } catch (error) {
            
        }
    }


    static store = (req,res) =>{

    }
}

module.exports = FormController