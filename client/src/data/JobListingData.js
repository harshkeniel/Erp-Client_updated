
import logoOne from '../assets/images/companyLogo.jpg'
import logoTwo from '../assets/images/companyLogoTwo.jpg'
import logoThree from '../assets/images/companyLogoThree.jpg'

const JobListingData = [
    {
        jobTitle: "Front-end Developer",
        domain: "Web Development",
        companyName: "BarRaiser",
        companyLogo: logoOne,
        companyLocation: "India",
        mandatorySkills: [
            {skillName: "ReactJs"},
            {skillName: "HTML"},
            {skillName: "CSS"},
            {skillName: "NodeJs"}
        ],
        isBookmark: false,
        link: "hhtp://github.com/Siddhesh25082001",
        stipend: 30000,
        duration: 3,
        mode: "Part-Time",
        Positions: 2,
        endDateToApply: "26th August 2022",
        isRemote: true,
    },

    {
        jobTitle: "Software Developer",
        domain: "Web Development",
        companyName: "QuantumHunts",
        companyLocation: "India",
        mandatorySkills: [
            {skillName: "ReactJs"},
            {skillName: "CSS"},
            {skillName: "Javascript"}
        ],
        isBookmark: false,
        companyLogo: logoTwo,
        link: "hhtp://github.com/Siddhesh25082001",
        stipend: 5000,
        duration: 6,
        mode: "Part-Time",
        Positions: 20,
        endDateToApply: "28th August 2022",
        isRemote: false,
    },

    {
        jobTitle: "Mobile App Developer",
        domain: "Web Development",
        companyName: "ElecTorq Technologies",
        companyLocation: "India",
        mandatorySkills: [
            {skillName: "ReactJs"},
            {skillName: "HTML"},
            {skillName: "CSS"},
            {skillName: "NodeJs"}
        ],
        isBookmark: false,
        companyLogo: logoThree,
        link: "hhtp://github.com/Siddhesh25082001",
        stipend: 25000,
        duration: 7,
        mode: "Full-Time",
        Positions: 6,
        endDateToApply: "31st August 2022",
        isRemote: true,
    }
]

export default JobListingData;