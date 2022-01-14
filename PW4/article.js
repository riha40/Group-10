import React from 'react';
import { View, Linking, TouchableNativeFeedback } from 'react-native';
import { Text, Card } from 'react-native-elements';

export default class Article extends React.Component {
  render() {
    const {
      title,
      description,
      urlToImage,
      url
    } = this.props.article;
    const {titleStyle} = styles;

    return (
      <TouchableNativeFeedback
        useForeground
        onPress={() => Linking.openURL(url)}
      >
        <Card
          featuredTitle={title}
          featuredTitleStyle={titleStyle}
        >
          <Text style={{ marginBottom: 10 }}>
            {description}
          </Text>
        </Card>
      </TouchableNativeFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    marginHorizontal: 5,
    textShadowColor: '#00000f',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 3
  }
};
