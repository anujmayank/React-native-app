import {useEffect, useState} from "react";
import {Text, View, ScrollView} from "react-native";
import HashMap from "../utils/hashmap";
import ProjectCells from "./ProjectCells";
import styles from "../styles";


const creatorMap = new HashMap();

function CreatorScreen({creator}) {

    const [creatorData, setCreatorData] = useState();
    const getData=()=>{
        creator.forEach((item)=>{
            creatorMap.setItem(item.project.name, item);
        });
        setCreatorData(creatorMap);
    }

    useEffect(()=>{
        if(creator) getData();
    },[])

    return (
        <ScrollView>
            <View style={styles.projectTitle}>
                <Text style={styles.projectSubtitle}>My 'Evaluation Ready' Assessments as Creator</Text>
                {creatorData && Object.keys(creatorData.data).map((project)=>(
                    <View key={project} style={styles.fullWidth}>
                        <Text style={styles.projectName}>{project}</Text>
                        <View>
                            {creatorData.getItem(project).map((item)=>(
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

export default CreatorScreen;
