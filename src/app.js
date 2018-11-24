import axios from 'axios';

const URI ='https://ddm-project.herokuapp.com/api/2/all';

export default class App extends Component{
state = 
   { 
    anuncio: {},
    anuncios: []
};






async findAnuncios () {
axios.get(URI).then(
    (res) => {
        const anuncios = res.data;
        this.setState({anuncios})
    }
)
}; 

async getAnuncioById  (anuncio)  {
axios.get(`${URI}?id=${anuncio.id}`).then(
    (res) => {
        const anuncio = res.data;
        this.setState({anuncio})
    }
)

}


async searchAnuncio (anuncio) {
    axios.get(`${URI}?title_like=${anuncio.title}`).then(
        (res) => {
            const anuncios = res.data;
            this.setState({anuncios})
        }
    )
} 

render() {
    return  (
        <View>
        <ul>
            {this.state.anuncios.map( anuncio => <li>{anuncio.title}</li>)}

        </ul>
        </View>



    );

}

}