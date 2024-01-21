import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { globalStyles } from "../global";

const reviewSchema = yup.object({
    title: yup.string()
        .required()
        .min(4),

    start: yup.string().required(),
    
    end: yup.string().required(),

    summary: yup.string()
});

export default function EventForm({ submit }) {
    return <View>
        <Text style={globalStyles.title}>Add Event</Text>
        <Formik
            initialValues={{ title: '', start: '', end: '', summary: '' }}
            validationSchema={reviewSchema}
            onSubmit={(values) => {
                submit(values);
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
                            placeholder='Start date (yyyy-mm-dd hh-mm-ss)'
                            placeholderTextColor='#bbb'
                            onChangeText={formikProps.handleChange('start')}
                            value={formikProps.values.start}
                            onBlur={formikProps.handleBlur('start')}
                        />
                        <Text style={globalStyles.errorText}>{ formikProps.touched.start && formikProps.errors.start }</Text>

                        <TextInput
                            multiline minHeight={60}
                            style={globalStyles.input}
                            placeholder='End date (yyyy-mm-dd hh-mm-ss)'
                            placeholderTextColor='#bbb'
                            onChangeText={formikProps.handleChange('end')}
                            value={formikProps.values.end}
                            onBlur={formikProps.handleBlur('end')}
                        />
                        <Text style={globalStyles.errorText}>{ formikProps.touched.end && formikProps.errors.end }</Text>

                        <TextInput
                            multiline minHeight={60}
                            style={globalStyles.input}
                            placeholder='Summary'
                            placeholderTextColor='#bbb'
                            onChangeText={formikProps.handleChange('summary')}
                            value={formikProps.values.summary}
                            onBlur={formikProps.handleBlur('summary')}
                        />
                        <Text style={globalStyles.errorText}>{ formikProps.touched.summary && formikProps.errors.summary }</Text>
                    </View>

                    <TouchableOpacity onPress={formikProps.handleSubmit} style={globalStyles.button}>
                        <Text style={globalStyles.buttonText}>submit</Text>
                    </TouchableOpacity>
                </View>
            )}
        </Formik>
    </View>
}