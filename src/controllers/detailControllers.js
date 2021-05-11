const details = require('../models/details');

exports.displayMessage = (req, res) => {
    return res.status(200).json({message: "App is connected"})
}

exports.createDetails = (req, res) => {
    details.create({
        ...req.body
    }, (err, details) => {
        if (err) {
            return res.status(500).json({ message: 'Failed to Create', data: err})
        } else {
            return res.status(200).json({message: 'Created succesfully', data: details})
        }
    })
}

exports.getAllDetails = (req, res) => {
    let conditions = {};
    if(req.query.name){
        conditions.name = req.query.name;
    }
    if(req.query.email){
        conditions.email = req.query.email;
    }
    if(req.query.country){
        conditions.country = req.query.country;
    }
    details.find(conditions, (err, details) => {
        if (err) {
            return res.status(500).json({message: 'Failed to get data', data: err})
        } else {
            return res.status(200).json({message: 'Retrieved succesfully', data: details})
        }
    })
}

exports.getSingleDetails = (req, res) => {
    details.findById(req.params.id, (err, details) => {
        if (err) {
            return res.status(500).json({message: 'Failed to get data', data: err})
        } else {
            return res.status(200).json({message: 'Retrieved succesfully', data: details})
        }
    })
}

exports.updateDetails = (req, res) => {
    details.findByIdAndUpdate(req.params.id, {
        ...req.body
    }, (err, details) => {
        if (err) {
            return res.status(500).json({message: 'Failed to update data', data: err})
        } else if (!details){
            return res.status(404).json({message: 'Details don\'t exist'})
        } else {
            details.save((err, updatedDetails) => {
                if (err) {
                    return res.status(500).json({message: 'Failed to update data', data: err})
                } else {
                    
                    return res.status(200).json({message: 'Updated succesfully', data: updatedDetails})
                }
            })
        }
    })
}

exports.deleteDetails = (req, res) => {
    details.findByIdAndDelete(req.params.id, (err, details) => {
        if (err) {
            return res.status(500).json({message: 'Failed to delete', data: err})
        } else if(!details){
            return res.status(404).json({message: 'Details don\'t exist'})
        } else {
            return res.status(200).json({message: 'Deleted succesfully'})
        }
    })
}