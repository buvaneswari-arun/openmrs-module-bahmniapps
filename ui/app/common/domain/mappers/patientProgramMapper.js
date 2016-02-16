Bahmni.Common.Domain.PatientProgramMapper = function(){
    this.map = function(patientProgram, programAttributeTypes, dateCompleted) {

        var attributeFormatter = new Bahmni.Common.Domain.AttributeFormatter();
        return {
            dateEnrolled: patientProgram.dateEnrolled,
            states: patientProgram.states,
            uuid: patientProgram.uuid,
            dateCompleted: dateCompleted ? moment(dateCompleted).format(Bahmni.Common.Constants.ServerDateTimeFormat) : null,
            outcome: patientProgram.outcomeData ? patientProgram.outcomeData.uuid : null,
            attributes: attributeFormatter.getMrsAttributesForUpdate(patientProgram.patientProgramAttributes, programAttributeTypes, patientProgram.attributes)
        }
    }

}