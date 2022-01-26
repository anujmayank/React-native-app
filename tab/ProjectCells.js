import {Text, View} from "react-native";
import styles from "../styles";

function ProjectCells({projectData}) {

    return (
        <View>
            <View>
                <Text style={styles.project}>{projectData.copId} AC-{projectData.acId}</Text>
            </View>
            <View>
                <Text style={styles.projectLine}>{projectData.project.name}.{projectData.subProject.name}</Text>
            </View>
        </View>
    );
}

export default ProjectCells
