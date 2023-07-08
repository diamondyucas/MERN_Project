// @desc        Get Goals
// @route       GET /api/goals
// @access      Private

const getGoals = (req, res) => {
    res.status(200).json({message: 'Get Goals'})
}

const setGoals = (req, res) => {
    res.status(200).json({message: 'Set Goals'})
}

const updateGoals = (req, res) => {
    res.status(200).json({message: `Update Goal ${req.params.id}`})
}

const deleteGoals = (req, res) => {
    res.status(200).json({message: `Delete Goal ${req.params.id}`})
}

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals,
}