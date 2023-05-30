import { FC } from 'react'
import { ControllerRenderProps } from 'react-hook-form'
import ReactSelect, { OnChangeValue, Options } from 'react-select'
import makeAnimated from 'react-select/animated'

import { IFieldProps } from '../Field'
import formStyles from '../Form.module.scss'

import styles from './Select.module.scss'

export interface IOption {
	label: string
	value: number
}

export interface ISelect extends IFieldProps {
	options: Options<IOption>
	isMulti?: boolean
	field: ControllerRenderProps<any, any>
	isLoading?: boolean
}

const animatedComponents = makeAnimated()

const Select: FC<ISelect> = ({ placeholder, error, isMulti, options, field, isLoading }) => {
	const onChange = (newValue: OnChangeValue<IOption, boolean>) => {
		field.onChange(isMulti ? (newValue as IOption[]).map((item: IOption) => item.value) : (newValue as IOption).value)
	}
	const getValue = () => {
		if (field.value) {
			return isMulti
				? options.filter((option) => field.value.indexOf(option.value) >= 0)
				: options.find((option) => option.value === field.value)
		} else {
			return isMulti ? [] : ('' as any)
		}
	}
	return (
		<div className={styles.selectContainer}>
			<label>
				<span>{placeholder}</span>
				<ReactSelect
					isLoading={isLoading}
					classNamePrefix={'custom-select'}
					placeholder=''
					options={options}
					value={getValue()}
					onChange={onChange}
					isMulti={isMulti}
					components={animatedComponents}
				/>
			</label>
			{error && <div className={formStyles.error}>{error.message}</div>}
		</div>
	)
}

export default Select
