import DurationScreenTemplate from '../components/DurationScreenTemplate';

export default function OnScreen({ navigation }: any) {
  return (
    <DurationScreenTemplate
      navigation={navigation}
      taskScreenType="Off"
      cardText="away from"
    />
  );
}
