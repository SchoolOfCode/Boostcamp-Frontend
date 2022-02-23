import DurationScreenTemplate from '../components/DurationScreenTemplate';
import DurationScreen from '../components/DurationScreenTemplate';

export default function OnScreen({ navigation }: any) {
  return (
    <DurationScreenTemplate
      navigation={navigation}
      taskScreenType="On"
      cardText="that you can do on"
    />
  );
}
