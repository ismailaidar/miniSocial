const mongoose = require("mongoose");

const Schema = mongoose.Schema

const ProfileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    handle: {
        type: String,
        required: true
    },
    company: {
        type: String,
    },
    website: {
        type: String
    },
    location: {
        type: String
    },
    status: {
        type: String,
        required: true
    },
    skills: {
        type: [String],
        required: true
    },
    bio: {
        type: String, 
    },
    githubUsername: {
        type: String, 
    },
    experiences: [{
        title: {type: String, require: true},
        company: {type: String, require: true},
        location: {type: String},
        from: {type: Date, required: true},
        to: {type: Date},
        current: {type: Boolean, default: false},
        description: {type: Date}
    }],
    experiences: [{
        school: {type: String, require: true},
        degree: {type: String, require: true},
        fieldOfStudy: {type: String, require: true},
        from: {type: Date, required: true},
        to: {type: Date},
        current: {type: Boolean, default: false},
        description: {type: Date}
    }],
    social: {
        youtube: {type: String},
        facebook: {type: String},
        twitter: {type: String},
        linkedin: {type: String},
        instagram: {type: String},
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Profile = mongoose.model('profiles', ProfileSchema)