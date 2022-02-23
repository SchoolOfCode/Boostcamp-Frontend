import DurationScreen from '../components/DurationScreen';

export default function OnScreen({ navigation }: any) {
  return (
    <DurationScreen
      navigation={navigation}
      taskScreenType="On"
      cardText="that you can do on"
    />
  );
}
