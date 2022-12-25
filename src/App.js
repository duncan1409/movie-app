import React from "react";
import axios from "axios";

class App extends React.Component {
    state = {
        isLoading: true,
        movies: [],
    };
    getMovies = async () => {
        //	영화 데이터 로딩!
        const {
            data: {
                data: { movies },
            },
        } = await axios.get("https://yts.mx/api/v2/list_movies.json");
        this.setState({movies: movies, isLoading: false});// movies: movies는 movies로 축약 가능

    };
    componentDidMount() {
        this.getMovies();
    }

    render() {
        const { isLoading } = this.state;

        return <div>{isLoading ? "Loading..." : "We are Ready!"}</div>;
    }
}

export default App;
