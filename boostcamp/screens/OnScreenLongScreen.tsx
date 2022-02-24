import TaskScreenTemplate from '../components/TaskScreenTemplate';

export default function OnScreenLongScreen({ navigation }: any) {
  return (
    <TaskScreenTemplate
      route="tasks/onscreen/long"
      navigation={navigation}
      svgImage={'longImageOnScreen'}
    />
  );
}
