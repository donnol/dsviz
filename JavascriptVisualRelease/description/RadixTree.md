# Radix Tree

## 是什么？

基数树

## 如何表示？

```go
type RadixTree struct {
    root *RadixNode
}
type RadixNode struct {
    Childs map[rune]*RadixNode
}
func (rt *RadixTree) Print() {

}
```

## 如何构建？

## 如何新增？

## 如何删除？

## 性能如何？

## 参考
