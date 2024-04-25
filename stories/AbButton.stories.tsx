import React from "react";
import { AbButton } from '../src'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
    title: 'Componentes/AbButton',
    component: AbButton
} as ComponentMeta<typeof AbButton>

    const Template: ComponentStory<typeof AbButton> = (args) => <AbButton {...args} />

export const Primario = Template.bind({})
Primario.args = {
    texto: 'Ab Button Primario',
    tipo: 'primario'
} as AbButtonProps

export const Secundario = Template.bind({})

Secundario.args = {
    texto: 'Ab Button Secundario',
    tipo: 'Secundario'
} as AbButtonProps
