import profile_data from './data/profile.json';

const profile = (state = profile_data[0], action) => {
    switch (action.type) {
        case 'edit-profile':
            const profile = {
                _id: (new Date()).getTime() + '',
                "profilePicture": "../../images/dp.jpg", 	
                "bannerPicture": "../../images/matrix.jpg",
                ...action.profile,
                "dateJoined": "September 20",
                "followingCount": 312,	
                "followersCount": 180
            };
            return profile;
            break;
        default:
            return(state);
    }
};


export default profile;