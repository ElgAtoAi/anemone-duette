import { Card, CardContent, CardHeader, CardTitle } from './card'
import { Badge } from './badge'
import { Checkbox } from './checkbox'
import { Button } from './button'
import { Pencil, Trash2 } from 'lucide-solid'
import { motion } from 'solid-motion'

interface TaskCardProps {
  id: string
  title: string
  description?: string
  category: string
  completed: boolean
  onComplete: (id: string, completed: boolean) => void
  onDelete: (id: string) => void
  onEdit: (id: string) => void
}

export function TaskCard(props: TaskCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
    >
      <Card class={`w-full ${props.completed ? 'opacity-60' : ''}`}>
        <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
          <div class="flex items-center space-x-2">
            <Checkbox
              checked={props.completed}
              onCheckedChange={(checked) => props.onComplete(props.id, checked as boolean)}
            />
            <CardTitle class={`text-lg ${props.completed ? 'line-through' : ''}`}>
              {props.title}
            </CardTitle>
          </div>
          <div class="flex space-x-2">
            <Button variant="ghost" size="icon" onClick={() => props.onEdit(props.id)}>
              <Pencil class="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => props.onDelete(props.id)}>
              <Trash2 class="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {props.description && <p class="text-sm text-muted-foreground">{props.description}</p>}
          <Badge variant="secondary" class="mt-2">
            {props.category}
          </Badge>
        </CardContent>
      </Card>
    </motion.div>
  )
}