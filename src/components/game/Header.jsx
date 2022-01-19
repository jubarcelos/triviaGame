import md5 from 'crypto-js/md5';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      img: 'https//',
      loading: true,
    };
  }

  componentDidMount() {
    this.getImage();
  }

  getImage = () => {
    const { gravatarEmail } = this.props;

    const hash = md5(gravatarEmail);
    fetch(`https://www.gravatar.com/avatar/${hash}`).then(() => {
      this.setState({ img: `https://www.gravatar.com/avatar/${hash}`, loading: false });
    });
  };

  headerRender = () => {
<<<<<<< HEAD
    const { name, gravatarEmail } = this.props;
=======

    const { name, gravatarEmail, score, countCorrectAnswers } = this.props;
>>>>>>> b2ed10b313091dc15c8df8b9fba4239aa7dec424
    const { img } = this.state;

    return (
      <div>
        <img
          data-testid="header-profile-picture"
          src={ img }
          alt="imagemJogador"
          width="100px"
          height="100px"
        />
        <h2 data-testid="header-player-name">{ name }</h2>
        <p>{ gravatarEmail }</p>
<<<<<<< HEAD
        <p data-testid="header-score">0</p>
=======
        <p data-testid="header-score">{ `${countCorrectAnswers} ${score}` }</p>
>>>>>>> b2ed10b313091dc15c8df8b9fba4239aa7dec424
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    return loading ? null : this.headerRender();
  }
}

const mapStateToProps = (state) => ({
  gravatarEmail: state.player.gravatarEmail,
  name: state.player.name,
  score: state.player.score,
  countCorrectAnswers: state.correctAnswersCount,

});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  gravatarEmail: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  countCorrectAnswers: PropTypes.number.isRequired,
};
