import { useEffect, useRef } from 'react';
import BpmnModeler from 'bpmn-js/lib/Modeler';
import { PropertiesPanelModule } from '@bpmn-io/properties-panel';
import camundaModdlePackage from 'camunda-bpmn-moddle/resources/camunda.json';

import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css';
import '@bpmn-io/properties-panel/dist/assets/properties-panel.css';

const initialDiagram = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_1" targetNamespace="http://bpmn.io/schema/bpmn">
  <bpmn:process id="Process_approval" name="Bestellfreigabe" isExecutable="true">
    <bpmn:startEvent id="StartEvent_1" name="Bestellung eingegangen">
      <bpmn:outgoing>Flow_1</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:userTask id="Task_approve" name="Freigabe durch Manager" camunda:candidateGroups="management">
      <bpmn:incoming>Flow_1</bpmn:incoming>
      <bpmn:outgoing>Flow_2</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:endEvent id="EndEvent_1" name="Bestellung freigegeben">
      <bpmn:incoming>Flow_2</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:sequenceFlow id="Flow_1" sourceRef="StartEvent_1" targetRef="Task_approve" />
    <bpmn:sequenceFlow id="Flow_2" sourceRef="Task_approve" targetRef="EndEvent_1" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_approval">
      <bpmndi:BPMNShape id="StartEvent_1_di" bpmnElement="StartEvent_1">
        <dc:Bounds x="179" y="159" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_approve_di" bpmnElement="Task_approve">
        <dc:Bounds x="270" y="137" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="EndEvent_1_di" bpmnElement="EndEvent_1">
        <dc:Bounds x="432" y="159" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_1_di" bpmnElement="Flow_1">
        <di:waypoint x="215" y="177" />
        <di:waypoint x="270" y="177" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_2_di" bpmnElement="Flow_2">
        <di:waypoint x="370" y="177" />
        <di:waypoint x="432" y="177" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>`;

function App() {
  const containerRef = useRef(null);
  const propertiesRef = useRef(null);

  useEffect(() => {
    const modeler = new BpmnModeler({
      container: containerRef.current,
      propertiesPanel: {
        parent: propertiesRef.current
      },
      additionalModules: [
        propertiesPanelModule
      ],
      moddleExtensions: {
        camunda: camundaModdlePackage
      },
      keyboard: { bindTo: document.body }
    });

    modeler.importXML(initialDiagram).catch(err => console.error(err));

    return () => modeler.destroy();
  }, []);

  return (
    <div style={{ height: '90vh', display: 'flex' }}>
      <div ref={containerRef} style={{ flex: 1 }}></div>
      <div ref={propertiesRef} style={{ width: '300px', background: '#f8f8f8', borderLeft: '1px solid #ccc' }}></div>
    </div>
  );
}

export default App;
