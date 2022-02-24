import TaskScreenTemplate from '../components/TaskScreenTemplate';

export default function OnScreenMediumScreen({ navigation }: any) {
  return (
    <TaskScreenTemplate
      route="tasks/onscreen/medium"
      navigation={navigation}
      svgImage={'mediumImageOnScreen'}
    />
  );
}
