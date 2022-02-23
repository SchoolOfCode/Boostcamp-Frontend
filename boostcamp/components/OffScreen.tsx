import DurationScreen from './DurationScreen';

export default function OnScreen({ navigation }: any) {
  return (
    <DurationScreen
      navigation={navigation}
      taskScreenType="Off"
      cardText="away from"
    />
  );
}
