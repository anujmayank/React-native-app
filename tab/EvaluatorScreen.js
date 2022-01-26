import {useEffect, useState} from "react";
import {Text, ScrollView, View} from "react-native";
import HashMap from "../utils/hashmap";
import ProjectCells from "./ProjectCells";
import styles from "../styles";

const evaluatorMap = new HashMap();

function EvaluatorScreen({evaluator}) {
    const [evaluatorData, setEvaluatorData] = useState();
    const getData=()=>{
        evaluator.forEach((item)=>{
            evaluatorMap.setItem(item.project.name, item);
        });
        setEvaluatorData(evaluatorMap);
    }

    useEffect(()=>{
        if(evaluator) getData();
    },[])

    return (
        <ScrollView>
            <View style={styles.projectTitle}>
                <Text style={styles.projectSubtitle}>My 'Evaluation Ready' Assessments as Evaluator</Text>
                {evaluatorData && Object.keys(evaluatorData.data).map((project)=>(
                    <View key={project} style={styles.fullWidth}>
                        <Text style={styles.projectName}>{project}</Text>
                        <View>
                            {evaluatorData.getItem(project).map((item)=>(
                                <View key={item.acId}>
                                    <ProjectCells projectData={item} />
                                </View>
                            ))}
                        </View>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}

export default EvaluatorScreen;
