import TaskScreenTemplate from '../components/TaskScreenTemplate';

export default function OffScreenLongScreen({ navigation }: any) {
  return (
    <TaskScreenTemplate
      route="tasks/offscreen/long"
      navigation={navigation}
      svgImage="longImageOffScreen"
    />
  );
}
