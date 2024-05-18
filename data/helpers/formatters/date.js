//import moment from 'moment';

const orderPostsByDate = (field, posts, direction) => {
    //moment().format();
    //console.log("orderPostsByDate() - field:", field, "posts:", posts);


    let posts2 = [];

    posts && posts.length && posts.map((post) => {
        const pieces = post.date.split("-");
        const newDate = pieces.join('');

        console.log("orderPostsByDate() - newDate:", newDate);

        posts2.push({...post, ...{match_date: newDate}});
    });

    if(direction === "desc"){
        posts2.sort((a, b) => parseFloat(b['match_date']) - parseFloat(a['match_date']));
    } else{
        posts2.sort((a, b) => parseFloat(a['match_date']) - parseFloat(b['match_date']));
    }

    return posts2;
};

export { orderPostsByDate }
