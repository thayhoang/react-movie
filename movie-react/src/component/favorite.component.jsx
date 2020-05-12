import React, {Component} from 'react';

class Favorite extends Component {

    state = {
        movies: [
            {id: 1, title: 'title1', description: 'des1', trailer: 'trailer1'},
            {id: 2, title: 'title2', description: 'des1', trailer: 'trailer1'},
            {id: 3, title: 'title3', description: 'des1', trailer: 'trailer1'},
            {id: 4, title: 'title4', description: 'des1', trailer: 'trailer1'},
            {id: 5, title: 'title5', description: 'des1', trailer: 'trailer1'},
            {id: 6, title: 'title6', description: 'des1', trailer: 'trailer1'},
            {id: 7, title: 'title7', description: 'des1', trailer: 'trailer1'}
        ],
        selectedMovieId : 0
    }

    render() {
        return (
            <div className="container">
                Favorite
            </div>
        );
    }

}

export default Favorite;
