import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PostHeader = ({post}) => {
  return (
    <View style={style.container}>
      <View style={style.containerPost}>
        <Image
          source={{uri: post.profile_picture}}
          style={style.imagePostStory}
        />
        <Text style={style.textPost}>{post.user}</Text>
      </View>

      <Icon name="dots-vertical" size={20} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    alignItems: 'center',
  },
  imagePostStory: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: '#C13584',
  },
  textPost: {
    marginLeft: 5,
    fontWeight: '700',
  },
  containerPost: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default PostHeader;
