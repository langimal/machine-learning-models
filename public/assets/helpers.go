package helpers

import (
	"encoding/json"
	"errors"
	"io"
	"os"
	"path/filepath"
)

// ReadJSONFile reads a JSON file and unmarshals it into the given interface.
func ReadJSONFile(filePath string, v interface{}) error {
	file, err := os.Open(filePath)
	if err != nil {
		return err
	}
	defer file.Close()

	data, err := io.ReadAll(file)
	if err != nil {
		return err
	}

	return json.Unmarshal(data, v)
}

// WriteJSONFile marshals the given interface and writes it to a JSON file.
func WriteJSONFile(filePath string, v interface{}) error {
	data, err := json.MarshalIndent(v, "", "  ")
	if err != nil {
		return err
	}

	return os.WriteFile(filePath, data, 0644)
}

// EnsureDir checks if a directory exists, creates it if not.
func EnsureDir(dirPath string) error {
	if _, err := os.Stat(dirPath); errors.Is(err, os.ErrNotExist) {
		return os.MkdirAll(dirPath, 0755)
	}
	return nil
}

// JoinPath joins path elements using the OS-specific separator.
func JoinPath(elem ...string) string {
	return filepath.Join(elem...)
}

// FileExists checks if a file exists.
func FileExists(filePath string) bool {
	_, err := os.Stat(filePath)
	return !errors.Is(err, os.ErrNotExist)
}