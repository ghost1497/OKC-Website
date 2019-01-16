import React from 'react';
import '../styles/BrotherOnYard.css';

//Temporarily store data here
    const PostsData = require('../resources/data/brothers_on_yard');


// Start App

    class BrotherOnYard extends React.Component {
    constructor() {
        super();

        this.state = {
            posts: {}
        }
    }
    componentWillMount() {
        this.setState({
            posts: PostsData
        });
    }


    render() {
        return <div className="boty-body">
            <header className="app-header"></header>
            <Title />
            <div className="app-card-list" id="app-card-list">
                {
                    Object
                        .keys(this.state.posts)
                        .map(key => <Card key={key} index={key} details={this.state.posts[key]}/>)
                }
            </div>
        </div>
    }
}


class Title extends React.Component {
    render() {
        return <section className="app-title">
            <div className="app-title-content">
                <h1>Brothers on the Yard</h1>
            </div>
        </section>
    }
}


class CardHeader extends React.Component {
    render() {
        const { image, category } = this.props;
        var style = {
            backgroundImage: 'url(' + image + ')',
        };
        return (
            <header style={style} className="card-header">
                <h4 className="card-header--title">{category}</h4>
            </header>
        )
    }
}


class CardBody extends React.Component {
    render() {
        return (
            <div className="card-body">

                <h2 className="boty-h2">{this.props.title}</h2>

                <p className="body-content">{this.props.text}</p>

            </div>
        )
    }
}


class Card extends React.Component {
    render() {
        return (
            <article className="card">
                <CardHeader category={this.props.details.category} image={this.props.details.image}/>
                <CardBody title={this.props.details.title} text={this.props.details.text}/>
            </article>
        )
    }
}

export default BrotherOnYard;