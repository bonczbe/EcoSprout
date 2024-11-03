import { useTranslation } from "react-i18next";
import { Text, TextInput, TextInputProps, View } from "react-native";
import tw from "twrnc";

interface LabelInputProps extends TextInputProps {
  label: string;
  placeholder: string;
  value: any;
  stateUpdate: (value: string) => void;
}

function LabelInput({
  label,
  placeholder,
  value,
  stateUpdate,
  ...props
}: LabelInputProps) {
  const { t } = useTranslation();
  return (
    <View style={tw`flex-row items-center mb-6`}>
      <Text style={tw`w-32 mr-2 text-right`}>{label}:</Text>
      <TextInput
        style={tw`h-10 px-2 border border-gray-300 rounded-full w-60`}
        onChangeText={stateUpdate}
        placeholder={placeholder}
        value={value}
        {...props}
      />
    </View>
  );
}

export default LabelInput;
