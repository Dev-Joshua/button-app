import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons-container',
  templateUrl: './buttons-container.component.html',
  styleUrls: ['./buttons-container.component.scss'],
})
export class ButtonsContainerComponent {
  array_strings: string[] = [
    '<Button />',
    '&:hover, &:focus',
    '<Button variant="outline" />',
    '&:hover, &:focus',
    '<Button variant="text" />',
    '&:hover, &:focus',
    '<Button disableShadow />',
    '<Button disabled />',
    '<Button variant="text" disabled />',
    '<Button startIcon="local_grocery_store" />',
    '<Button endIcon="local_grocery_store" />',
    '<Button size="sm" />',
    '<Button size="md" />',
    '<Button size="lg" />',
    '<Button color="default" />',
    '<Button color="primary" />',
    '<Button color="secondary" />',
    '<Button color="danger" />',
    '&:hover, &:focus',
  ];
}
