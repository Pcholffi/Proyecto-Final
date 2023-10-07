import { useRef } from "react";
import { useHistory } from "react-router-dom";
import swal from 'sweetalert';
import 'bootstrap/dist/css/bootstrap.min.css';


const SearchForm = () => {
    let keyword = useRef();
    let history = useHistory();
    const handleSubmit = (event) => {
        let word = keyword.current.value;
        event.preventDefault()
        //if (word.current.value <= 3) {
        if (keyword.current.value > 3) {
            swal({
                text: 'Se mas especifico, pon 3 letras o mas',
                icon: 'error'
            });
        } else {
            keyword.current.value = '';
            history.push(`/results/buscar?name=${word}`);
        }
    }

    return (
        <div className="row align-items-center">
            <div className="col-9">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="input-group">
                        <input
                            type="text"
                            name="keyword"
                            placeholder="Buscar...."
                            className="form-control searchinput"
                            ref={keyword}
                        />
                        <button
                            type="submit"
                            className="btn btn-primary btn-lg searchbutton"
                        >
                            <i className="fas fa-search" /> Buscar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SearchForm;