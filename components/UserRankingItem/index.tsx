import React, { useState, useEffect } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Networth } from '../FormattedTextElements';
import { ElementView, Text, ModifiedListItemButton, FollowButton } from '../Themed'

export interface UserRankingItemProps {
  user: {
    profilePic: string,
    username: string,
    assets: number,
    following: boolean,
  },
  place: number,
}

export default function UserRankingItem (props: UserRankingItemProps) {
  const {
    user: {
      profilePic,
      username,
      assets,
      following,
    },
    place
  } = props;

  const [itemActivePress, setItemActivePress] = useState(false)
  const [activeFollow, setActiveFollow] = useState(following)

  const onPressed = () => {
    console.log('pressed list item')
  }

  const followPressed = () => {
    console.log('follow pressed');
  }

  return (
    <ModifiedListItemButton 
      buttonStyles={styles.root} 
      onPress={onPressed}
      activePress={itemActivePress}
      onPressChange={setItemActivePress}
    >
      <ElementView style={styles.left}>
        <Text style={styles.index}>{place}</Text>
        <Image style={styles.image} source={{ uri: profilePic}} />
        <ElementView>
          <Text style={styles.username} numberOfLines={1}>{username}</Text>
          <Networth value={assets} style={styles.networth} />
        </ElementView>
      </ElementView>
      <ElementView style={styles.right}>
        <FollowButton 
          active={activeFollow}
          text={activeFollow ? "Following" : "Follow"}
          onPress={() => setActiveFollow(prevState => !prevState)}
        />
      </ElementView>
    </ModifiedListItemButton>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  image: {
    height: 40,
    width: 40,
    marginRight: 15,
    borderRadius: 6,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    fontWeight: 'bold',
    fontSize: 15,
    maxWidth: 130,
    marginBottom: 5,
  },
  right: {
    alignItems: 'flex-end',
  },
  networth: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  index: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 15,
  },
});
