import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { globalStyles } from "../global";

const reviewSchema = yup.object({
    title: yup.string()
        .required()
        .min(4),

    date: yup.string(),
    
    notes: yup.string(),
});

export default function TodoForm({ submit }) {
    return <View>
        <Text style={globalStyles.title}>Add Todo</Text>
        <Formik
            initialValues={{ title: '', date: '', notes: '' }}
            validationSchema={reviewSchema}
            onSubmit={(values) => {
                submit({title: values.title, notes: values.notes, tags: [], date: values.date, reminders: []});
            }}
        >
            {(formikProps) => (
                <View>
                    <View style={{alignItems: 'center'}}>
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Title *'
                            placeholderTextColor='#bbb'
                            onChangeText={formikProps.handleChange('title')}
                            value={formikProps.values.title}
                            onBlur={formikProps.handleBlur('title')}
                        />
                        <Text style={globalStyles.errorText}>{ formikProps.touched.title && formikProps.errors.title }</Text>

                        <TextInput
                            style={globalStyles.input}
                            placeholder='Date (yyyy-mm-dd)'
                            placeholderTextColor='#bbb'
                            onChangeText={formikProps.handleChange('date')}
                            value={formikProps.values.date}
                            onBlur={formikProps.handleBlur('date')}
                        />
                        <Text style={globalStyles.errorText}>{ formikProps.touched.date && formikProps.errors.date }</Text>

                        <TextInput
                            multiline minHeight={60}
                            style={globalStyles.input}
                            placeholder='Notes'
                            placeholderTextColor='#bbb'
                            onChangeText={formikProps.handleChange('notes')}
                            value={formikProps.values.notes}
                            onBlur={formikProps.handleBlur('notes')}
                        />
                        <Text style={globalStyles.errorText}>{ formikProps.touched.notes && formikProps.errors.notes }</Text>
                    </View>

                    <TouchableOpacity onPress={formikProps.handleSubmit} style={globalStyles.button}>
                        <Text style={globalStyles.buttonText}>submit</Text>
                    </TouchableOpacity>
                </View>
            )}
        </Formik>
    </View>
}