import TaskScreenTemplate from '../components/TaskScreenTemplate';

export default function OnScreenShortScreen({ navigation }: any) {
  return (
    <TaskScreenTemplate
      route="tasks/onscreen/short"
      navigation={navigation}
      svgImage="shortImageOnScreen"
    />
  );
}
