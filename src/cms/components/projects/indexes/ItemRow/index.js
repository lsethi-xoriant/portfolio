import React, { Component, PropTypes } from 'react';
import TextDisplay from '../../../shared/TextEditor/Display/index';
import RaisedButton from 'material-ui/lib/raised-button';
import Divider from 'material-ui/lib/divider';
import styles from './styles.scss';


const inlineStyles = {
  button: {
    
  }
};

class ItemRow extends Component {
  constructor(props) {
    super(props);
  }

  renderTags() {
    if (this.props.tags.length > 0)
    return (
      <div className={styles.tagList}>
        {this.props.tags.map((tag, index) => {
        return <span key={index} className={styles.tag}>{tag}</span>
        })}
      </div>
    )
  }

  renderImage() {
    if (this.props.image) {
      return <img src={this.props.image} className={styles.image} />
    }
  }

  renderDescription() {
    if(this.props.description) {
      console.log('hoge')
      return <TextDisplay description={this.props.description} />
    }
  }

  render() {
    return(
      <div className={styles.root}>
        <h2 className={styles.title}>{this.props.title}</h2>
        <Divider />
        {this.renderTags()}
        {this.renderImage()}
        {this.renderDescription()}
        <a href={this.props.sourceUrl} target="_blank">
          <RaisedButton label="FORK ON GITHUB" styles={inlineStyles.button} />
        </a>
      </div>
    );
  }
}

ItemRow.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  sourceUrl: PropTypes.string,
  sampleUrl: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string)
};

export default ItemRow;