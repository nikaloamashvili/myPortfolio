import React from "react";
import ProjectCarousel from "./ProjectCarousel";


class ProjectModal extends React.Component {


    render() {

        
     console.log("its me");
     console.log(this.props.title);


        return (
          

            <div  className={this.props.vis ? 'modal' : "nmodal"} id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{this.props.title}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.fun} >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="carousel-container">
                                <ProjectCarousel images={this.props.images} name={this.props.title} />
                            </div>
                            <p id= "modal-paragraph">{this.props.paragraph}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.props.fun}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default ProjectModal;