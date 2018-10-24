import React, { Component } from "react";
import { FlatList, ActivityIndicator, Image, Text } from "react-native";
import actions from "../Actions/gallery";
import { connect } from "react-redux";
import styles from "./Styles/GalleryStyles";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchImagesForGallery();
  }
  static navigationOptions = {
    title: "GALLERY",
    headerTitleStyle: { textAlign: "center", alignSelf: "center" }
  };
  render() {
    // console.log("IN RENDER" + JSON.stringify(this.props.images.length));
    // console.log("IN RENDER1" + JSON.stringify(this.props.images[0]));
    return this.props.isLoading ? (
      <ActivityIndicator size="large" color="#774023" />
    ) : (
      <FlatList
        data={this.props.images}
        keyExtractor={image => image.id}
        renderItem={({ item }) => (
          <Image
            style={styles.image}
            source={{
              uri: item.urls.thumb
            }}
          />
        )}
      />
    );
  }
}

const mapStateToProps = ({ gallery }) => ({
  images: gallery.images,
  isLoading: gallery.isLoading
});

const mapDispatchToProps = actions;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);
