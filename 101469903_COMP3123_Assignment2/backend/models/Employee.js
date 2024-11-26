const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  position: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  date_of_joining: {
    type: Date,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
});

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;
